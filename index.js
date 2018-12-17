console.log("hola mundo");

import * as tf from '@tensorflow/tfjs';


// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4, 5, 6], [6, 1]);
const ys = tf.tensor2d([1, 3, 5, 7, 9, 11], [6, 1]);

// Train the model using the data.
debugger;
model.fit(xs, ys, { epochs: 200 }).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    model.predict(tf.tensor2d([7], [1, 1])).print();
    debugger;
});