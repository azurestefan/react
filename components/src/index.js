import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam" 
                    timeAgo="Today at 4:30PM" 
                    commentText="Hey there"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 5:30PM" 
                    commentText="Yo"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 6:30PM" 
                    commentText="How's it going?"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));