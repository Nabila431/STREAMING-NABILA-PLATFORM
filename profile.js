import supabase from './supabase.js';

const nameInput = document.getElementById('name');
const bioInput = document.getElementById('bio');
const feedback = document.getElementById('feedback');
const updateBtn = document.getElementById('update-profile');

let userId = null;

async function loadProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    feedback.textContent = 'Belum login.';
    return;
  }
  userId = user.id;

  const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
  if (data) {
    nameInput.value = data.name || '';
    bioInput.value = data.bio || '';
  }
}

updateBtn.addEventListener('click', async () => {
  const name = nameInput.value.trim();
  const bio = bioInput.value.trim();

  const { error } = await supabase.from('profiles').upsert({
    id: userId,
    name,
    bio
  });

  if (error) {
    feedback.textContent = 'Gagal menyimpan.';
  } else {
    feedback.textContent = 'Profil diperbarui!';
  }
});

loadProfile();
