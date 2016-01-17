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

require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
