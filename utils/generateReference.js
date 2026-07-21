export default function generateReference() {

  const random = Math.floor(
    100000 + Math.random() * 900000
  );

  return `TVF-${new Date().getFullYear()}-${random}`;

}