class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.datetime :last_signed_in_at
      t.string :name
      t.string :oauth_uid

      t.timestamps
    end
    add_index :users, :oauth_uid, unique: true
    add_index :users, :name, unique: true
  end
end
