namespace :db do
  task sync: ["db:drop", "db:create", "db:migrate", "db:test:prepare"]
end
