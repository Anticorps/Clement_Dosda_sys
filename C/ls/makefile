CC	= gcc
OBJS	= ls.o
CFLAGS	= -c -Wall -pedantic
LDFLAGS	=
PGM	= lscopy

all: $(PGM)

$(PGM): $(OBJS)
	$(CC) -o $(PGM) $(OBJS) $(LDFLAGS)

.c.o:
	$(CC) $(CFLAGS) $<

clean:
	rm -f $(PGM)
	rm -f $(OBJS)
	tm -f *~
