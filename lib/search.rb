class Search
  attr_reader :sql
  def initialize term
    return nil if term.empty?
    words = term.split
    sql = []
    params = []
    umlauts = {"ss" => "ß", "ae" => "ä", "ue" => "ü", "oe" => "ö"}
    words
      .map { |word| word.gsub(/[()\+-]/, "") }
      .map { |word| word.gsub(/ss|ae|ue|oe/) { |n| umlauts[n] }}
      .map { |word| word.starts_with?("49") ? word[2..-1] : word}
      .map { |word| word.starts_with?("0") ? word[1..-1] : word}
      .map do |term|
        if is_i?(term)
          sql << "prefix in (?)"
          params << to_prefixes(term)
        else
          sql << "comment ilike ?"
          params << "%#{term}%"
        end
      end
    @sql = [sql.join(" or "), *params]
  end

  private
  
  def is_i? term
    !!(term =~ /\A?[0-9]+\z/)
  end

  def to_prefixes word
    words = word.split("")
    (0..words.size - 1).each.reduce([]) do |memo, v|
      memo << words[0..v.to_i].join
    end
  end

end
