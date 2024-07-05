export default function Audios() {
  return (
    <>
      <div className="justify-center bg-white" id="row-84246874">
        <div id="col-916361718" className="col mx-auto  py-10 md:w-1/2 sm:w-full lg:w-1/2">
          <div className="my-4 text-center flex flex-col gap-2">
            <h3 className="font-bold text-xl my-2">ISM-E-AZAM</h3>
            <p className="my-2">Click the play button.</p>
            <audio controls preload="none" className="my-2 w-full max-w-md mx-auto">
              <source
                src="https://leadu.pk/wp-content/uploads/2019/12/ISM-E-AZAM.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </>
  );
}
