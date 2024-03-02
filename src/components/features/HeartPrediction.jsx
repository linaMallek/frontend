import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";

export default function HeartPrediction() {
  const [data, setData] = useState({
    feature1: "",
    feature2: "",
    feature3: "",
    feature4: "",
    feature5: "",
    feature6: "",
    feature7: "",
    feature8: "",
    feature9: "",
    feature10: "",
    feature11: "",
    feature12: "",
    feature13: "",
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'envoi de la requête:",
        error
      );
    }
  };

  return (
    <div className="yesbg-docblue yesh-screen yesflex">
      <div className="yesbg-white yespy-6 yesh-fit yesw-3/5 yesm-auto yesshadow-xl yesrounded-xl yesflex yesflex-col yesjustify-center yesitems-center yesgap-16 yespx-16">
        <h2 className="yestext-3xl">Prediction</h2>
        <form onSubmit={handleSubmit} className="yesflex yesflex-col yesgap-5">
          <div className="yesflex yesgap-6">
            <label htmlFor="feature1">Age:</label>
            <Input
              type="number"
              id="feature1"
              name="feature1"
              value={data.feature1}
              onChange={handleChange}
              required
            />
            <label htmlFor="feature2">Sex:</label>
            <Input
              type="number"
              id="feature2"
              name="feature2"
              value={data.feature2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="yesflex yesgap-6">
            <label htmlFor="feature3">CH-type</label>
            <Input
              type="number"
              id="feature3"
              name="feature3"
              value={data.feature3}
              onChange={handleChange}
              required
            />

            <label htmlFor="feature4">Trestbps</label>
            <Input
              type="number"
              id="feature4"
              name="feature4"
              value={data.feature4}
              onChange={handleChange}
              required
            />
          </div>
          <div className="yesflex yesgap-6">
            <label htmlFor="feature5">cholestoral</label>
            <Input
              type="number"
              id="feature5"
              name="feature5"
              value={data.feature5}
              onChange={handleChange}
              required
            />
            <label htmlFor="feature6">Fbs </label>
            <Input
              type="number"
              id="feature6"
              name="feature6"
              value={data.feature6}
              onChange={handleChange}
              required
            />
          </div>
          <div className="yesflex yesgap-6">
            <label htmlFor="feature7">Restecg</label>
            <Input
              type="number"
              id="feature7"
              name="feature7"
              value={data.feature7}
              onChange={handleChange}
              required
            />
            <label htmlFor="feature8">Thalach</label>
            <Input
              type="number"
              id="feature8"
              name="feature8"
              value={data.feature8}
              onChange={handleChange}
              required
            />
          </div>
          <div className="yesflex yesgap-6">
            <label htmlFor="feature9">Exang</label>
            <Input
              type="number"
              id="feature9"
              name="feature9"
              value={data.feature9}
              onChange={handleChange}
              required
            />

            <label htmlFor="feature10">Oldpeak</label>
            <Input
              type="number"
              id="feature10"
              name="feature10"
              value={data.feature10}
              onChange={handleChange}
              required
            />
          </div>
          <div className="yesflex yesgap-6">
            <label htmlFor="feature11">Slope</label>
            <Input
              type="number"
              id="feature11"
              name="feature11"
              value={data.feature11}
              onChange={handleChange}
              required
            />

            <label htmlFor="feature12">Ca</label>
            <Input
              type="number"
              id="feature12"
              name="feature12"
              value={data.feature12}
              onChange={handleChange}
              required
            />
          </div>
          <div className="yesflex yesgap-6">
            <label htmlFor="feature13">Thal</label>
            <Input
              type="number"
              id="feature13"
              name="feature13"
              value={data.feature13}
              onChange={handleChange}
              required
            />
            <button
              className="yesbg-docblue yestext-white yesp-4 yesrounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        <p>prediction is {prediction}</p>
        {prediction !== null && (
          <div>
            <h3>Résultat de la prédiction :</h3>
            <p>
              {prediction === 0
                ? "Le patient n'est pas malade"
                : "Le patient est malade"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
