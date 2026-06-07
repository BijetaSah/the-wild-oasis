import supabase from "./supabase";

export async function fetchSettings() {
  const { data: settings, error } = await supabase.from("settings").select("*");
  if (error)
    throw new Error(`Couldn't load settings data. Message -- ${error}`);
  return settings;
}
