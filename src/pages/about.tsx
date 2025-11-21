import YouTube from 'react-youtube';

export function About() {
    const videoId = 'I7MBoiZSwEQ';

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    }
    return (
        <div>
            <h1 className="title">
                Sobre
            </h1>
            <article className="flex flex-col w-4/5 justify-center m-auto">
                <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda maiores quidem exercitationem quis aut fugit quisquam numquam? Ea, aspernatur nulla cum excepturi eaque tempora maxime eveniet repudiandae distinctio ipsa facilis.</p>
                </section>
                <section className='flex flex-row m-auto mt-4'>
                    <div>
                        <YouTube videoId={videoId} opts={opts} />
                    </div>
                    <div className='flex flex-1 ml-4'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempora labore iste corporis temporibus quisquam optio enim sapiente, nisi, quia quidem vel, a consequuntur architecto eaque obcaecati nesciunt neque! Quibusdam.</p>
                    </div>
                </section>
            </article>
        </div>
    )
}