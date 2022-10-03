import sys
import datetime

time = datetime.datetime.now()

output = "hi %s current time is now %s" % {sys.argv[1],time}

print(output)