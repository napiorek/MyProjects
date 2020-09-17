const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // define the routes here
  router.post('/event', (req, res, next) => {
    db.query(
      'INSERT INTO Stock (StockID, Symbol, FullName, ChangeValue, ChnageInPercent) VALUES (?,?,?,?)',
      [owner, req.body.name, req.body.description, new Date(req.body.date)],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

router.delete('/event/:id', function (req, res, next) {
    db.query(
      'DELETE FROM Stock WHERE id=?',
      [req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

module.exports = createRouter;