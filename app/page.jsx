import Heading from "@/components/Heading";
import { getAllRooms } from "./actions/getAllRooms";
import RoomCard from "@/components/RoomCard";

export default async function Home() {
  try {
    const rooms = await getAllRooms();
    
    return (
      <div className="container">
        <Heading title="Available Rooms" />
        {rooms?.length > 0 ? (
          rooms.map((room) => <RoomCard key={room.$id} room={room} />)
        ) : (
          <p>No rooms found</p>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="container">
        <h1>Available Rooms</h1>
        <div className="alert alert-error">
          Error: {error.message} {/* سيظهر الخطأ الحقيقي */}
        </div>
      </div>
    );
  }
}