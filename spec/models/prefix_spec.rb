require 'rails_helper'

RSpec.describe Prefix, type: :model do
  before do
    @prefix = Prefix.create(prefix: 15555, comment: "foobarbaz")
  end
  describe "search" do
    it "should find by prefix" do
      @search = Prefix.search("15555723")
      expect(@search).to include(@prefix)
    end
    it "should find by comment" do
      @prefixes = Prefix.search("bar")
      expect(@prefixes).to include(@prefix)
    end

    it "should clean brackets" do
      @prefixes = Prefix.search "1(5555)723"
      expect(@prefixes).to include(@prefix)
    end

    it "should clean hyphens" do
      @prefixes = Prefix.search "1-5555-723"
      expect(@prefixes).to include(@prefix)
    end

    it "should find multiple records" do
      @p1 = Prefix.create(prefix: 7234, comment: "Foo bar baz GmbH")
      @p2 = Prefix.create(prefix: 1234, comment: "Rosenburg")

      @p3 = Prefix.create(prefix: 5555, comment: "Berlin")

      @prefixes = Prefix.search("7234-78-55 burg")
      expect(@prefixes).to include(@p1, @p2)
      expect(@prefixes).not_to include(@p3)
    end

    it "should find prefixes with umlauts" do
      @p1 = Prefix.create(prefix: 12345, comment: "das Mädchen")
      @search = Prefix.search("Mäd")
      expect(@search).to include(@p1)
    end

    it "should truncate leading zero" do
      @search = Prefix.search("015555723")
      expect(@search).to include(@prefix)
    end

    it "should truncate 49 from start" do
      @search = Prefix.search("491555578")
      expect(@search).to include(@prefix)
    end

    it "should do a complex search" do
      @search = Prefix.search("49(0)155-55-76 berl")
      @p1 = Prefix.create(prefix: 123, comment: "Berlin")
      @p2 = Prefix.create(prefix: 321, comment: "Brelin")

      expect(@search).to include(@prefix, @p1)
      expect(@search).not_to include(@p2)
    end

    it "should convert to umlauts" do
      @p1 = Prefix.create(prefix: 123456, comment: "Haßlinghausen")
      @search = Prefix.search("hasslinghausen")

      expect(@search).to include(@p1)
    end
  end
end
