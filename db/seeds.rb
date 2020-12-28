# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

Product.delete_all
# . . .
Product.create(:title => 'Programming Ruby 1.9',
:description =>
%{<p>
Ruby is the fastest growing and most exciting dynamic language
out there. If you need to get working programs delivered fast,
you should add Ruby to your toolbox.
</p>},
:image_url => 'http://www.fillmurray.com/200/200',
:price => 49.50)
Product.create(:title => 'Seven Habits of highly effective people',
:description =>
%{<p>
Ruby is the fastest growing and most exciting dynamic language
out there. If you need to get working programs delivered fast,
you should add Ruby to your toolbox.
</p>},
:image_url => 'http://www.fillmurray.com/200/200',
:price => 24.50)
Product.create(:title => 'The daVinci code',
:description =>
%{<p>
Ruby is the fastest growing and most exciting dynamic language
out there. If you need to get working programs delivered fast,
you should add Ruby to your toolbox.
</p>},
:image_url => 'http://www.fillmurray.com/200/200',
:price => 87.00)
Product.create(:title => 'Rich Dad poor Dad',
:description =>
%{<p>
Ruby is the fastest growing and most exciting dynamic language
out there. If you need to get working programs delivered fast,
you should add Ruby to your toolbox.
</p>},
:image_url => 'http://www.fillmurray.com/200/200',
:price => 87.00)

puts "Product Created"
# . . .
