class User < ApplicationRecord
  
  validates_presence_of :email, :name, :oauth_uid
  validates_uniqueness_of :oauth_uid
end
