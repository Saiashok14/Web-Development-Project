document.addEventListener('DOMContentLoaded', () => {
  
  const products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    category: 'electronics',
    price: 1200,
    rating: 4.7
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    category: 'electronics',
    price: 150,
    rating: 4.5
  },
  {
    id: 3,
    name: 'Leather Wallet',
    category: 'accessories',
    price: 45,
    rating: 4.3
  },
  {
    id: 4,
    name: 'Sunglasses',
    category: 'accessories',
    price: 80,
    rating: 4.6
  },
  {
    id: 5,
    name: 'Espresso Machine',
    category: 'home',
    price: 300,
    rating: 4.4
  },
  {
    id: 6,
    name: 'Curtains (Set of 2)',
    category: 'home',
    price: 90,
    rating: 4.2
  },
  {
    id: 7,
    name: 'Denim Jacket',
    category: 'clothing',
    price: 110,
    rating: 4.5
  },
  {
    id: 8,
    name: 'Casual T-Shirt',
    category: 'clothing',
    price: 35,
    rating: 4.1
  },
  {
    id: 9,
    name: 'Smart Watch',
    category: 'electronics',
    price: 250,
    rating: 4.6
  },
  {
    id: 10,
    name: 'Backpack (Waterproof)',
    category: 'accessories',
    price: 65,
    rating: 4.4
  },
  {
    id: 11,
    name: 'Table Lamp',
    category: 'home',
    price: 55,
    rating: 4.3
  },
  {
    id: 12,
    name: 'Slim Fit Jeans',
    category: 'clothing',
    price: 70,
    rating: 4.2
  }
];


  const productList = document.getElementById('productList');
  const categoryFilter = document.getElementById('categoryFilter');
  const sortOption = document.getElementById('sortOption');
  const applyBtn = document.getElementById('applyBtn');

  function displayProducts(list) {
    productList.innerHTML = '';

    if (list.length === 0) {
      productList.innerHTML = '<p class="no-results">No products found.</p>';
      return;
    }

    list.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p class="price">Price: $${product.price}</p>
        <p class="rating">⭐ ${product.rating}</p>
      `;
      productList.appendChild(card);
    });
  }

  function filterAndSort() {
    let filtered = [...products];
    const selectedCategory = categoryFilter.value;
    const selectedSort = sortOption.value;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedSort === 'low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    displayProducts(filtered);
  }

  applyBtn.addEventListener('click', filterAndSort);

  filterAndSort(); 
});
