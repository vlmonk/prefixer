class TitleController < ApplicationController
  def index
  end

  def search
    per_page = 10
    page = params[:page].to_i - 1

    prefixes = Prefix.search(params[:text])
    total = prefixes.count

    paginated_prefixes = prefixes.order(:prefix).limit(per_page).offset(page * per_page)
    
    render json: {prefixes: paginated_prefixes, total: total}
  end
end
