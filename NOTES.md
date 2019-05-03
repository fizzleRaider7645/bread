Bread Expense Tracker

User:
has_one: :account
has_one :account_history, through: :account
has_secure_password
-email

Account:
has_one: account_history 
belongs_to: user
-user_id
-liabilities
-income streams

Account History:
belongs_to: :account
-account_id 

