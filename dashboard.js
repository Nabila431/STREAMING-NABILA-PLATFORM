import supabase from './supabase.js';

async function loadDashboard() {
  // Hitung total stream dari tabel analytics
  const { data: streams } = await supabase.from('song_analytics').select('id');
  document.getElementById('stream-count').textContent = streams?.length || 0;

  // Hitung komentar
  const { data: comments } = await supabase.from('comments').select('id');
  document.getElementById('comment-count').textContent = comments?.length || 0;

  // Hitung like (misalnya dari tabel likes)
  const { data: likes } = await supabase.from('likes').select('id');
  document.getElementById('like-count').textContent = likes?.length || 0;
}

loadDashboard();
