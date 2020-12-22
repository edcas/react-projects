import SpeakerFavoriteButton from "../SpeakerFavoriteButton/SpeakerFavoriteButton";
import SpeakerImage from "../SpeakerImage/SpeakerImage";

const Speaker = ({id, bio, firstName, lastName, isFavorite}) => (
    <div className="rounded overflow-hidden shadow-lg p-6" key={id}>
        <div className="grid grid-cols-4 mb-6">
            <div className="font-bold text-lg col-span-3">{`${firstName} ${lastName}`}</div>
            <div className="flex justify-end">
                <SpeakerFavoriteButton isFavorite={isFavorite}/>
            </div>
        </div>
        <div className="mb-6">
            <SpeakerImage id={id}/>
        </div>
        <div className="text-gray-600">{bio.substr(0, 70) + '...'}</div>
    </div>
);

export default Speaker
