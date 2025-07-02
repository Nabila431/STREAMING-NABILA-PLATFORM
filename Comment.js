// js/comment.js
import supabase from "./supabase.js";

const commentsDiv = document.getElementById("comments");
const input = document.getElementById("comment-input");
const submit = document.getElementById("comment-submit");

submit.addEventListener("click", async () => {
  const text = input.value.trim();
  if (!text) return;
  await supabase.from("comments").insert([{ content: text }]);
  input.value = "";
  loadComments();
});

async function loadComments() {
  const { data } = await supabase.from("comments").select("*").order("created_at", { ascending: false });
  commentsDiv.innerHTML = data.map(c => `<p>💬 ${c.content}</p>`).join("");
}

loadComments();
