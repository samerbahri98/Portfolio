
const idv = (elem) => document.getElementById(elem).value;

document.addEventListener("DOMContentLoaded", (ev) => {
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();

  document.getElementById("contact").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const data = {
      name: idv("name"),
      email: idv("email"),
      phone: idv("phone"),
      subject: idv("subject"),
      message: idv("message"),
    };
    db.collection("Contacts")
      .add(data)
      .then((res) => console.log({ res, tat: "ues" }))
      .catch((err) => console.log(err));
  });
});
