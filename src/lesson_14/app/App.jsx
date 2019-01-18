import * as React from 'react';
import {GlobalHeader} from './components/global-header/GlobalHeader.jsx';
import {GlobalContent} from './components/global-content/GlobalContent.jsx';
import {GlobalFooter} from './components/global-footer/GlobalFooter.jsx';

export class App extends React.Component {
    render() {
        return <div className="page-wrapper">
            <GlobalHeader />
            <GlobalContent />
            <GlobalFooter />
        </div>;
    }
}

