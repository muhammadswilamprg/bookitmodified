export default async function Home() {
  try {
    const rooms = await getAllRooms();
    return (
      <>
        <Heading title="Available Rooms" />
        {rooms.length > 0 ? (
          rooms.map((room) => <RoomCard key={room.$id} room={room} />)
        ) : (
          <p>No rooms available</p>
        )}
      </>
    );
  } catch (error) {
    return (
      <>
        <Heading title="Available Rooms" />
        <p className="text-red-500">Failed to load rooms. Please try again later.</p>
      </>
    );
  }
}
