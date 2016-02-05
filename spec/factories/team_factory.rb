FactoryGirl.define do
  factory :team do
    players { [FactoryGirl.build(:player)] }
    result { FactoryGirl.build(:result) }
  end
end
