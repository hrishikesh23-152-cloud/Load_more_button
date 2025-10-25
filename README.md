## Features

* **Batch Loading:** Loads an initial 20 items on component mount using `useEffect`.
* **Load More Button:** Clicking the button fetches and displays the next 20 items, managed with `useState`.
* **Disabled State:** The button is automatically disabled once all 100 items have been loaded, preventing further requests.
