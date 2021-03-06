const db = require('../models/algoVerseModels')

const appController = {};


// algoVerseController.difficulty = (req, res, next) => {
//   console.log('reached get state')
//   const text = 
//   `SELECT company, position, summary, core_values FROM public.users u
//   LEFT OUTER JOIN public.job_listings jl ON u._id = jl.user_id
//   WHERE progress = 'applied';`
//   db.query(text)
//       .then((received) => {
//           res.locals.listings = received.rows;
//           return next();
//       })
// };

appController.getNewQuestion = (req, res, next) => {
  let { data } = req.body;
  console.log('this is the score', data);
  const values = [ data ];
  const text = 
  `SELECT * FROM algorithms
  WHERE question_id = $1;`;
  db.query(text, values)
      .then((received) => {
        console.log(received.rows);
        res.locals.algorithm = received.rows;
        return next();
      })
      .catch((err) => next(err));
};

appController.getLeaderBoard = (req, res, next) => {
    const text = 
    `SELECT username, score FROM users
    ORDER BY score desc;`
    db.query(text)
        .then((received) => {
          console.log('this is from leaderboard', received.rows);
          res.locals.leaderboard = received.rows;
          return next();
        });
};

appController.postLeaderBoard = (req, res, next) => {
  const { data } = req.body;
  console.log('this is the cookies from backend', req.cookies);
  console.log('this is the information posting to leader board', req.body);
  const { username } = req.cookies;
  const values = [ data, username ]
  const text = `
  UPDATE users
  SET score = $1
  WHERE username = $2;
  `
  db.query(text, values)
    .then((response) => {
      console.log('posted to leaderboard');
      return next();
    })
}




module.exports = appController;