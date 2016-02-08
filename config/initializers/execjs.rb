require 'alaska/runtime'

#if Rails.env == "development" || Rails.env == "test" || ENV["RAILS_GROUPS"] == "assets"
#  # use alaska.js pipelining only when precompiling assets
  ExecJS.runtime = Alaska::Runtime.new(:debug => true)
#end
