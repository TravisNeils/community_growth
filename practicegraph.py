import altair as alt
import pandas as pd
import numpy as np
import pandas as pd
from altair import datum

alt.data_transformers.enable('json')

x = np.arange(10000)
y = x * 2
s = np.sqrt(x)
# on = ['on'] * len(x)
df = pd.DataFrame({'x':x, 'y': y, 's':s})

# options = ['on', 'off']
#
# rating_radio = alt.binding_radio(options=['on', 'off'])
#
# rating_select = alt.selection_single(fields=['on'], bind=rating_radio, name="on", init={'on':'on'})

chart = alt.Chart(df).mark_trail(strokeCap='square').encode(
    x='x',
    y = 'y',
    size = alt.Size('s', scale=None)
).interactive()

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