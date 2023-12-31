import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { GetRental, GetReview } from "../services/Properties"
import axios from "axios"
import Reviews from "./Reviews"
import Rentals from "./Rentals"

const rentalDetails = (props) => {
  //   let navigate = useNavigate()
  const [property, setProperty] = useState([])
  const [review, setReview] = useState([])

  let { id } = useParams()

  useEffect(() => {
    const showProperty = async () => {
      const data = await GetRental(id)
      setProperty(data)
    }
    showProperty()
  }, [])

  useEffect(() => {
    const showReview = async () => {
      const data = await GetReview(id)
      setReview(data)
    }
    showReview()
  }, [])
  console.log(review)

  return property ? (
    <div className="main-content">
      <div className="card-overlay centered">
        <div className="rental-grid">
          <div className="rental-card">
            <div className="images">
              <div className="rental-details-name">
                <h1>{property.name}</h1>
              </div>
              <img src={property.image} alt={property.name} />
            </div>
          </div>

          <div className="input-wrapper">
            <div className="rental-header">
              <h3>Price: ${property.price} per night</h3>
              <h3>Bedrooms/Bathrooms: {property.size}</h3>
            </div>

            <p>{property.description}</p>
            <div className="input-wrapper">
              {/* <Reviews setReviews={setReviews} /> */}
              {/* <h3>Reviews:</h3>
              {review.map((review) => (
                <div key={review._id}>
                  <p>Name: {review.name} </p>
                  <p>Review: {review.reviewDetails}</p>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      <ul>
        <div className="links">
          <li>
            <Link to="/rentals/all">Back</Link>
          </li>
          <li>
            <Link to={`/reviews/${id}/addreview`}>Add Review</Link>
          </li>
          <li>
            <Link to={`/reservation/${id}`}>Check Availability</Link>
          </li>
        </div>
      </ul>
    </div>
  ) : (
    // </div>
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate("/signin")}>Sign In</button>
    </div>
  )
}
export default rentalDetails
