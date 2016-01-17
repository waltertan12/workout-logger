class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.boolean :admin, null: false, default: false
      t.string :session_token, null: false, index: true, unique: true
      t.string :image_url, null: false, default: 'https://pbs.twimg.com/profile_images/516426269064318976/iCim4eXE.jpeg'

      t.timestamps null: false
    end
  end
end
