require 'csv'

csv_text = File.read('/tmp/germany_raw.csv')
csv = CSV.parse(csv_text, headers: true, encoding: 'ISO-8859-1')

r = csv.reduce([]) do |res, row|
  comment = row['comment'].nil? ? nil : row['comment']
  prefix = row['prefix']

  res << [prefix, comment]
end

CSV.open('fixed.csv', 'w') do |csv|

  r.each do |row|
    csv << row
  end
end

