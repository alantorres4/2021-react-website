import React from 'react';
import { Cpp, python, ruby, java, reactjs, mysql, aws, jira, vscode } from './imports';
import './brand.css';

const Brand = () => {
    return (
        <div className="branding__brand section__padding">
           <div>
               <img src={Cpp} alt="cplusplus" />
            </div>
            <div>
               <img src={python} alt="python" />
            </div>
            <div>
               <img src={ruby} alt="ruby" />
            </div>
            <div>
               <img src={java} alt="java" />
            </div>
            <div>
               <img src={reactjs} alt="reactjs" />
            </div>
            <div>
               <img src={mysql} alt="mysql" />
            </div>
            <div>
               <img src={aws} alt="aws" />
            </div>
            <div>
               <img src={jira} alt="jira" />
            </div>
            <div>
               <img src={vscode} alt="vscode" />
            </div>

        </div>
    )
}

export default Brand
