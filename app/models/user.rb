# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  admin           :boolean          default(FALSE), not null
#  session_token   :string           not null
#  image_url       :string           default("https://pbs.twimg.com/profile_images/516426269064318976/iCim4eXE.jpeg"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  # Macros
  attr_reader :password

  # Constants
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  # Validations
  validates :password, length: { minimum: 8 }, confirmation: true,
                       allow_nil: true
  validates :password_confirmation, presence: true
  validates :password_digest, presence: true
  validates :username, presence: true, length: { maximum: 255 }
  validates :session_token, presence: true, uniqueness: true
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: {case_sensitive: false}
  validates :image_url, presence: true
  validates :admin, inclusion: { in: [true, false] }
  validate :valid_password, on: :create

  # Callbacks
  after_initialize :ensure_session_token
  after_initialize :ensure_image_url

  # Class methods
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user if user && user.is_password?(password)
  end

  # Instance methods
  def generate_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end

  def ensure_image_url
      self.image_url ||= "https://pbs.twimg.com/profile_images/516426269064318976/iCim4eXE.jpeg"
  end

  def password=(password)
    if password.length > 7
      self.password_digest = BCrypt::Password.create(password)
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def valid_password
    if password_digest.nil?
      errors.add(:password, "Password must have at least 8 characters")
    end
  end
end
