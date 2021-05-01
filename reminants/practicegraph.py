import altair.vegalite.v3 as alt
import pandas as pd
import numpy as np
import pandas as pd
from altair import datum

# x = np.arange(10000)
x = np.array([1,2,3,4,4,3,2])
y = x * 2
size = np.sqrt(x)
angle = np.random.uniform(-360,0, len(x))
# on = ['on'] * len(x)
df = pd.DataFrame({'x':x, 'y': y, 's':size, 'angle': angle})

# options = ['on', 'off']
#
# rating_radio = alt.binding_radio(options=['on', 'off'])
#
# rating_select = alt.selection_single(fields=['on'], bind=rating_radio, name="on", init={'on':'on'})

chart = alt.Chart(df).mark_text(angle= 10).encode(
    text=alt.value("➟"),
    x='x',
    y='y',
    size='s'

)



dx = 4
dy = 2

slope = dy/dx

dh = np.sqrt(dx**2 +  dy**2)

# 1 = dx**2 + dy *2
# dx/dy = x
dx = dx/dh
dy = dy/dh
print(np.sqrt(dx**2 + dy **2))

chart.save('practice.html')