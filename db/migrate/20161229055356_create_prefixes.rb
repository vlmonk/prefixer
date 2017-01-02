class CreatePrefixes < ActiveRecord::Migration[5.0]
  def change
    create_table :prefixes do |t|
      t.string :prefix
      t.string :comment
    end
  end
end
