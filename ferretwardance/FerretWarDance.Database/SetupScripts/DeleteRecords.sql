delete from dbo.[LongTodo];
DBCC CHECKIDENT ([LongTodo], RESEED, 0)

delete from dbo.[ShortTodo];
DBCC CHECKIDENT ([ShortTodo], RESEED, 0)

DBCC CHECKIDENT ([ArchiveTodo], RESEED, 0)
delete from dbo.[ArchiveTodo];