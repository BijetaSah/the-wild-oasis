import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();
  if (error)
    throw new Error(`Couldn't load settings data. Message -- ${error.message}`);
  return data;
}

export async function updateSettings(newSettings) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSettings)
    .eq("id", 1)
    .select();
  if (error) throw new Error(`Couldn't update settings ${error.message}`);

  return data;
}
