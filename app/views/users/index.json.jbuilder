json.array!(@users) do |user|
  json.extract! user, :id, :name, :winner
  json.url user_url(user, format: :json)
end
