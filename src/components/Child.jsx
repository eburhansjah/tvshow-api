import PropTypes from "prop-types";
import {styled} from "styled-components";

// Styling for Child function
const ChildWrapper = styled.div`
    border: 1px solid lightslategray;
    border-radius: 8px;
    padding: 5px;
    margin: 5px;
    background-color: lightslategray;
    max-width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-weight: bold;
        text-decoration: underline;
        text-align: center;
        color: #ffd100;
    }
`

const Details = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 2 columns: label and details
    gap: 10px 0; // gap for row and column
    justify-content: center;
    width: 80%;
    margin: 20px 0;
    
    p{
        display: contents;
        color: ivory;
    }
    
    span{
        text-align: left;
    }
    
    span label{
        justify-self: end;
    }
`

    // span.status{
    //     color: ${({ status }) => (status === "Running" ? "green" : "inherit")};
    // }
    //
    // span.rating {
    //     ${({rating}) => {
    //         const numericRating = parseFloat(rating);
    //         if (numericRating <= 5.0) {
    //             return css`color: red;`;
    //         } else if (numericRating <= 6.5) {
    //             return css`color: orange;`;
    //         } else if (numericRating <= 7.5) {
    //             return css`color: yellow;`;
    //         } else if (numericRating <= 8.5) {
    //             return css`color: green;`;
    //         } else {
    //             return css`color: limegreen;`; // for ratings > 8.5
    //         }
    //     }};
    // }

const StyledImage = styled.img`
    max-width: 80%;
    height: auto;
    border-radius: 8px;
    padding: 2px;
`


export default function Child({show}){
    // Reformat genres s.t. it is separated by commas
    const formattedGenres = show.genres ? show.genres.join(", ") : 'N/A';

    // Function to determine status color
    const getStatusColor = (status) => {
        const stringStatus = String(status);
        if (stringStatus === "Running"){
            return "aqua";
        } else {
            return "ivory";
        }
    };

    // Function to determine rating color
    const getRatingColor = (rating) => {
        const numericRating = parseFloat(rating);
        if (numericRating <= 5.0) {
            return "darkred";
        } else if (numericRating <= 6.5) {
            return "orange";
        } else if (numericRating <= 7.5) {
            return "yellow";
        } else if (numericRating <= 8.5) {
            return "limegreen";
        } else {
            return "lightgreen";
        }
    };

    return(
        <>
            <ChildWrapper>
                <StyledImage src={show.image?.medium} alt={show.name} />
                <h2>{show.name}</h2>
                <Details>
                    <p>
                        <span className="label">Status:</span>
                        <span style={{ color: getStatusColor(show.status)}}>
                            {show.status}</span>
                    </p>
                    <p>
                        <span className="label">Genres:</span>
                        <span>{formattedGenres}</span>
                    </p>
                    <p>
                        <span className="label">Network:</span>
                        <span>{show.network?.name || 'N/A'}</span>
                    </p>
                    <p>
                        <span className="label">Country:</span>
                        <span>{show.network?.country?.name}</span>
                    </p>
                    <p>
                        <span className="label">Rating:</span>
                        <span style={{ color: getRatingColor(show.rating?.average) }}>
                            {show.rating?.average || 'N/A'}
                        </span>
                    </p>
                </Details>
            </ChildWrapper>
        </>
    );
}

// propTypes for the Child component
Child.propTypes = {
    show: PropTypes.shape({
        image: PropTypes.shape({
            medium: PropTypes.string.isRequired,
        }).isRequired,
        name: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        summary: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        network: PropTypes.shape({
            name: PropTypes.string,
            country: PropTypes.shape({
                name: PropTypes.string
            })
        }),
        rating: PropTypes.shape({
            average: PropTypes.number
        })
    }).isRequired
};