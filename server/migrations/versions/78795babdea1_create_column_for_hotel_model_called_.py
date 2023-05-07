"""create column for hotel model called distance

Revision ID: 78795babdea1
Revises: 165d5f5c2f84
Create Date: 2023-05-07 12:14:12.632454

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '78795babdea1'
down_revision = '165d5f5c2f84'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('hotels', schema=None) as batch_op:
        batch_op.add_column(sa.Column('distance', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('hotels', schema=None) as batch_op:
        batch_op.drop_column('distance')

    # ### end Alembic commands ###
