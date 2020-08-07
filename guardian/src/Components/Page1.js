import React from 'react';

import Navigation from './Navigation'

class Page1 extends React.Component {
    render() {
        const titles = [
            { label: 'News', link: 'https://www.google.com' },
            { label: 'Opinion', link: '#' },
            { label: 'Culture', link: '#' },
            { label: 'Sports', link: '#' },
            { label: 'LifeStyle', link: '#' }
        ];


        return (
            <div>

                <Navigation menuItems={titles} />


            </div>
        );
    }
}
export default Page1;