// const title = React.createElement(
//     "h1",
//     { id: "newId" },
//     "My first react element"
// )
// ReactDOM.render(
//     title,
//     document.getElementById('root')
// );

// const title2 = 'my new React titles';
// const desc = 'how to learn React oooh shit i am too late';
// const Header =  (
//     <header>
//         <h1> { title2 } </h1>
//         <p> { desc } </p>
//     </header>
// )
// ReactDOM.render(
//     <Header />,
//     document.getElementById('call')

// )

const players = (
    [
        {
            name: "Tserendorj" ,
            score: 0,
        },
        {
            name: "Tugsuu" ,
            score: 0,
        },
        {
            name: "Namuun" ,
            score: 0,
        },
        {
            name: "Zulaa" ,
            score: 0,
        },
        {
            name: "Nyamkhuu" ,
            score: 0,
        },
        {
            name: "Khangaikhuu" ,
            score: 0,
        },
    ]
)

function Header (props){
    return(
        <header>
            <h1> { props.title } </h1>
            <span className="stats">totalPlayer: { props.totalPlayer }</span>
        </header>
    )
};

function Player(props){
    return(
        <div className="player">
            <span className="player-name">{ props.name }</span>
            <Counter score = {props.score}/>
        </div>
    )
};

const Counter = (props)=>{
    return(
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment">+</button>
        </div>
    )
};
const App = (props) =>{
    return(
        <div className="scoreboard">
            <Header title = "scoreboard"
            player = {props.initialPlayers.length}
            />
            {props.initialPlayers.map(player =>
               <Player name = {player.name} score = {player.score} />   
            )}
        </div>
    )
}


ReactDOM.render(
    <App initialPlayers = {players}/>,
    document.getElementById('root')
);