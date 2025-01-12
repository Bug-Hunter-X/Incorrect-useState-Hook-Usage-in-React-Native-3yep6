```javascript
//Correct usage of useState hook
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1); // Correct usage
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
}
```