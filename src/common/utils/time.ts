export function timeForSeconds(time: string) {
  const [h = "0", min = "0", sec = "0"] = time.split(":");
  const hInSec = Number(h) * 3600;
  const minInSec = Number(min) * 60;
  return hInSec + minInSec + Number(sec);
}
