export function searchPrefix(text, page) {
  return (dispatch) => {
    return fetch(`/search?text=${text}&page=${page}`)
      .then(response => response.json())
      .then(json => dispatch({type: 'RECEIVE_PREFIXES', prefixes: json.prefixes, text: text, total: json.total, page: page}))
  }
}

export function sort(field, order, prefixes) {
  let toggled_order = order == "asc" ? "desc" : "asc"
  let sort_order = {}
  sort_order[field] = toggled_order

  let sorted_prefixes = prefixes.slice().sort((a, b) => {
    if (a[field] > b[field]) {
      return 1;
    }
    if (a[field] < b[field]) {
      return -1;
    }
    return 0;
  })
  if (order == "asc") {
    sorted_prefixes.reverse()
  }
  
  return {
    type: 'SORT',
    prefixes: sorted_prefixes,
    sort_order
  }
}
