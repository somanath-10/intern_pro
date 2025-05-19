// Thumbnail switch
document.querySelectorAll('.thumbnail').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('mainImage').src = img.src;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    img.classList.add('active');
  });
});

// Size Chart Modal
const sizeModal = document.getElementById('sizeChartModal');
document.getElementById('sizeChartBtn').onclick = () => sizeModal.style.display = 'flex';
document.querySelectorAll('.modal .close-btn').forEach(btn => {
  btn.onclick = () => btn.closest('.modal').style.display = 'none';
});
window.onclick = e => {
  if (e.target.classList.contains('modal')) e.target.style.display = 'none';
};
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
});

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Compare Colours Modal
const compareModal = document.getElementById('compareModal');
const compareBtn = document.getElementById('compareColors');
const compareContainer = document.querySelector('.compare-swatches');
compareBtn.addEventListener('click', () => {
  compareContainer.innerHTML = '';
  document.querySelectorAll('.color-swatch.selected').forEach(swatch => {
    let clone = swatch.cloneNode(true);
    clone.style.cursor = 'default';
    compareContainer.appendChild(clone);
  });
  compareModal.style.display = 'flex';
});

// Variant Selection
document.querySelectorAll('.color-swatch').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
    btn.classList.add('selected');
    localStorage.setItem('selectedColor', btn.dataset.color);
  });
});
document.getElementById('sizeSelect').addEventListener('change', e => {
  localStorage.setItem('selectedSize', e.target.value);
});

// Load from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const color = localStorage.getItem('selectedColor');
  if (color) {
    document.querySelectorAll('.color-swatch').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.color === color);
    });
  }
  const size = localStorage.getItem('selectedSize');
  if (size) document.getElementById('sizeSelect').value = size;
});
