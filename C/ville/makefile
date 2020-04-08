CC	= gcc
OBJS	= main.o ville.o
CFLAGS	= -c -g -Wall -ansi -pedantic
LDFLAGS	=
PGM	= tp_ville

all: $(PGM)

$(PGM): $(OBJS)
	$(CC) -o $(PGM) $(OBJS) $(LDFLAGS)

.c.o:
	$(CC) $(CFLAGS) $<

clean:
	rm -f $(PGM)
	rm -f $(OBJS)
	tm -f *~	
