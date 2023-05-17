import React from "react";
import { storage, firestore } from "../Firestore/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";

function Startupsform() {
  const [value, setValue] = React.useState({
    name: "",
    file: null,
    domain: "",
    year: "",
    passyear: "",
    status: "",
    desc: "",
    founder1: "",
    founder2: "",
    founder3: "",
    founder4: "",
    founder5: "",
    linked1: "",
    linked2: "",
    linked3: "",
    linked4: "",
    linked5: "",
    website: "",
  });
  const router = useRouter();
  const setData = (e) => {
    setValue((pre) => {
      return {
        ...pre,
        [e.target.name]:
          e.target.name === "file" ? e.target.files[0] : e.target.value,
      };
    });
  };
  const SendDetails = async (url) => {
    try {
      await addDoc(collection(firestore, "startups"), {
        name: value.name,
        imgurl: url,
        domain: value.domain,
        year: value.year,
        passyear: value.passyear,
        status: value.status,
        desc: value.desc,
        founder: [
          value.founder1,
          value.founder2,
          value.founder3,
          value.founder4,
          value.founder5,
        ],
        linkedin: [
          value.linked1,
          value.linked2,
          value.linked3,
          value.linked4,
          value.linked5,
        ],
        website: value.website,
      });
      alert("Data send successfully");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };
  const sendPhoto = () => {
    const storageRef = ref(storage, "images/" + value.name);
    const metadata = {
      contentType: "image/png",
    };
    const uploadTask = uploadBytesResumable(storageRef, value.file, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            alert("storage/unauthorized");
            break;
          case "storage/canceled":
            alert("storage/unauthorized");
            break;
          case "storage/unknown":
            alert("storage/unauthorized");
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
         
          if(downloadURL){
            
          SendDetails(downloadURL);}
        });
      }
    );
  };
  const Submit = (e) => {
    e.preventDefault();
    alert("Wait sending Data");
    sendPhoto();
  };
  return (
    <>
      <div className="MaincontinerForm">
        <h1 style={{ marginLeft: "-4rem" }}>Add Startup</h1>
        <form onSubmit={Submit}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={value.name}
            onChange={setData}
            autoComplete="off"
            required
          />
          <br />
          <input type="file" name="file" required onChange={setData} />
          <br />
          <input
            type="text"
            placeholder="Enter domain"
            value={value.domain}
            onChange={setData}
            autoComplete="off"
            name="domain"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Enter year"
            value={value.year}
            onChange={setData}
            autoComplete="off"
            name="year"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Enter Passing year"
            value={value.passyear}
            onChange={setData}
            autoComplete="off"
            name="passyear"
            required
          />
          <br />

          <input
            type="text"
            placeholder="Enter status"
            value={value.status}
            onChange={setData}
            autoComplete="off"
            name="status"
            required
          />
          <br />
          <textarea
            placeholder="Enter description"
            value={value.desc}
            onChange={setData}
            autoComplete="off"
            name="desc"
            required
          ></textarea>
          <br />
          <input
            type="text"
            placeholder="Enter Founder 1"
            value={value.founder1}
            onChange={setData}
            autoComplete="off"
            name="founder1"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Linkedin Founder 1"
            value={value.linked1}
            onChange={setData}
            autoComplete="off"
            name="linked1"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Enter Founder 2"
            value={value.founder2}
            onChange={setData}
            autoComplete="off"
            name="founder2"
          />
          <br />
          <input
            type="text"
            placeholder="Linkedin Founder 2"
            value={value.linked2}
            onChange={setData}
            autoComplete="off"
            name="linked2"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Founder 3"
            value={value.founder3}
            onChange={setData}
            autoComplete="off"
            name="founder3"
          />
          <br />
          <input
            type="text"
            placeholder="Linkedin Founder 3"
            value={value.linked3}
            onChange={setData}
            autoComplete="off"
            name="linked3"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Founder 4"
            value={value.founder4}
            onChange={setData}
            autoComplete="off"
            name="founder4"
          />
          <br />
          <input
            type="text"
            placeholder="Linkedin Founder 4"
            value={value.linked4}
            onChange={setData}
            autoComplete="off"
            name="linked4"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Founder 5"
            value={value.founder5}
            onChange={setData}
            autoComplete="off"
            name="founder5"
          />
          <br />
          <input
            type="text"
            placeholder="Linkedin Founder 5"
            value={value.linked5}
            onChange={setData}
            autoComplete="off"
            name="linked5"
          />
          <br />
          <input
            type="text"
            placeholder="startup website"
            value={value.website}
            onChange={setData}
            autoComplete="off"
            name="website"
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}

export default Startupsform;
