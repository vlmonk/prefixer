class Prefix < ApplicationRecord
  def self.search term
    search = Search.new(term)

    Prefix.where(search.sql)
  end
end
