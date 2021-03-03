import React from 'react'
import Girl from '../pexels-andrea-piacquadio-733872.jpg';

const HomeAbout = () => {
    return (
        <div className="homeabout">
            <div className="homeabout__img">
                <img src={Girl} alt=""/>
            </div>
            <div className="homeabout__content h-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quas amet accusamus impedit dolorum nostrum similique, corrupti voluptatum quasi hic debitis nulla libero reiciendis sit, consequatur totam, tempora a laboriosam ducimus magni? Sint et mollitia, natus autem odio sed amet non delectus veniam maxime, placeat voluptatibus ratione inventore dolor nesciunt, quaerat officia enim excepturi laboriosam. Laborum porro possimus sit sequi mollitia quas tenetur tempore, enim unde omnis quasi molestias deleniti, voluptatum incidunt earum adipisci aliquam blanditiis sint? Cupiditate, aperiam adipisci? Possimus asperiores reprehenderit hic dolorem in eos assumenda? Veniam 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus, provident animi, pariatur repellendus tempore non quos dolor, mollitia velit maiores fuga qui necessitatibus fugit earum! Harum rerum, natus expedita ut nulla sequi velit reprehenderit illo ipsum, temporibus nam magni!
                <button className="cta-link btn-contact mt-l h-4 border-round">Free Home Valuation</button>
            </div>
        </div>
    )
}

export default HomeAbout
